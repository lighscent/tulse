const database = require('../config/database');

class DatabaseService {
    static async createUser(username, password, email) {
        const encrypted = database.encrypt({ password, email });
        const stmt = database.prepare(
            'INSERT INTO users (username, password, email) VALUES (?, ?, ?)'
        );
        return stmt.run(username, encrypted, email);
    }

    static async addMusic(title, artist, album, filepath, userId) {
        const musicData = { artist, album, filepath };
        const encrypted = database.encrypt(musicData);
        const stmt = database.prepare(
            'INSERT INTO music (title, encrypted_data, user_id) VALUES (?, ?, ?)'
        );
        return stmt.run(title, encrypted, userId);
    }

    static async getMusic(id) {
        const stmt = database.prepare('SELECT * FROM music WHERE id = ?');
        const music = stmt.get(id);
        if (music) {
            music.decrypted_data = database.decrypt(music.encrypted_data);
        }
        return music;
    }
}

module.exports = DatabaseService;