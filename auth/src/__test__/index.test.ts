import { it } from 'node:test'
import request from 'supertest'
import { app } from '..'

it('Response with a status of 200', () => {
    request(app)
        .get('/')
        .expect(200)
        .end(function(err, res) {
            if (err) throw err;
        });
})