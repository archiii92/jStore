/**
 * Generic service class.
 * @class
 */

import { Entity } from '../model/entity';

export class Service<T extends Entity> {

    /**
     * Any entity REST service constructor.
     * @param url URL for entities REST API.
     * @param fakeEntities Entity mock-data for easy front-end development.
     */
    constructor(url: string, fakeEntities: Array<T>) {
        this.url = url;
        this.fakeEntities = fakeEntities;
    }

    private url: string;
    private fakeEntities: Array<T>;

    /**
     * Get all entities.
     */
    getAll(): Promise<Array<T>> {
        return Promise.resolve(this.fakeEntities.slice());
    }

    /**
     * Get entity by it's id.
     * @param id Entity id.
     */
    getById(id: string): Promise<T> {
        return Promise.resolve(this.fakeEntities.find(x => x.id === id));
    }

    /**
     * Update entity.
     * @param entity Entity with changed fields.
     */
    update(entity: T): Promise<void> {
        const oldEntity = this.fakeEntities.find(x => x.id === entity.id);
        const i = this.fakeEntities.indexOf(oldEntity);
        this.fakeEntities.splice(i, 1, entity);
        return Promise.resolve();
    }

    /**
     * Create new entity.
     * @param entity Entity to be created.
     */
    create(entity: T): Promise<string> {
        entity.id = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
            const r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });

        this.fakeEntities.push(entity);
        return Promise.resolve(entity.id );
    }

    /**
     * Delete entity by it's id.
     * @param id Entity id.
     */
    delete(id: string): Promise<void> {
        const entity = this.fakeEntities.find(x => x.id === id);
        const i = this.fakeEntities.indexOf(entity);
        this.fakeEntities.splice(i, 1);
        return Promise.resolve();
    }
}
