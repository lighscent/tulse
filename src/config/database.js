const Database = require('better-sqlite3');
const CryptoJS = require('crypto-js');
const path = require('path');
require('dotenv').config();

const ENCRYPTION_KEY = process.env.DB_ENCRYPTION_KEY;

class SecureDatabase {
    constructor() {
        const dbPath = path.join(__dirname, '../../storage/database/tulse.db');
        this.db = new Database(dbPath, {
            verbose: console.log,
            fileMustExist: false
        });

        // Enable WAL mode for better concurrency
        this.db.pragma('journal_mode = WAL');

        // Enable foreign keys
        this.db.pragma('foreign_keys = ON');

        // Set busy timeout
        this.db.pragma('busy_timeout = 5000');
    }

    encrypt(data) {
        return CryptoJS.AES.encrypt(JSON.stringify(data), ENCRYPTION_KEY).toString();
    }

    decrypt(encryptedData) {
        const bytes = CryptoJS.AES.decrypt(encryptedData, ENCRYPTION_KEY);
        return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    }

    prepare(sql) {
        return this.db.prepare(sql);
    }

    transaction(cb) {
        return this.db.transaction(cb);
    }

    close() {
        this.db.close();
    }
}

const database = new SecureDatabase();
module.exports = database;