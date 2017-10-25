import { DBClient } from '../persistence/db.client';
import * as Promise from 'promise';
import { User } from '../model/User';
export class UserRepository {

    public static search(term: string): Promise<User[]> {
        return new Promise((done, reject) =>
            DBClient.query('SELECT * FROM bh_user WHERE full_name like $1', ['%' + term + '%'], (err, res) => {
                if (err) {
                    reject(err);
                } else {
                    done(res.rows.map((dbuser => new User(dbuser.id, dbuser.full_name, dbuser.gender, dbuser.date_born, dbuser.email, dbuser.phone, dbuser.username))));
                }
            }));
    }
}