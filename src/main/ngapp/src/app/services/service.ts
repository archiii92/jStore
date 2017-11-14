// /**
//  * Generic service class.
//  * @class
//  */

// import { Entity } from '../model/entity';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs/Observable';
// import "rxjs/add/operator/map";

// const PROTOCOL = "http";
// const PORT = 3500

// export class Service<T extends Entity> {
//     private baseUrl: string;
//     private http: HttpClient;
//     url: string

//     /**
//      * Generic entity REST service constructor.
//      * @param http HttpClient implementation.
//      * @param url URL for entity REST API.
//      */
//     constructor(http: HttpClient, url: string) {
//         debugger;
//         this.http = http;
//         this.url = PROTOCOL + '://' + location.hostname + ':' + PORT + '/' + url;
//          // String.raw`${PROTOCOL}://${location.hostname}:${PORT}/${url}`;
//     }

//     /**
//      * Get all entities.
//      */
//     getAll(): Observable<Array<T>> {
//         return this.http.get<Array<T>>(this.url);
//     }

//     /**
//      * Get entity by it's id.
//      * @param id Entity id.
//      */
//     getById(id: string): Promise<T> {
//         return Promise.resolve(this.fakeEntities.find(x => x.id === id));
//     }

//     /**
//      * Update entity.
//      * @param entity Entity with changed fields.
//      */
//     update(entity: T): Promise<void> {
//         const oldEntity = this.fakeEntities.find(x => x.id === entity.id);
//         const i = this.fakeEntities.indexOf(oldEntity);
//         this.fakeEntities.splice(i, 1, entity);
//         return Promise.resolve();
//     }

//     /**
//      * Create new entity.
//      * @param entity Entity to be created.
//      */
//     create(entity: T): Promise<string> {
//         entity.id = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
//             const r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
//             return v.toString(16);
//         });

//         this.fakeEntities.push(entity);
//         return Promise.resolve(entity.id );
//     }

//         // create(entity: T): Observable<T> {
//     //     entity.id = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
//     //         const r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
//     //         return v.toString(16);
//     //     });

//     //     this.fakeEntities.push(entity);
//     //     return  Observable.from([entity])
//     // }

//     /**
//      * Delete entity by it's id.
//      * @param id Entity id.
//      */
//     delete(id: string): Promise<void> {
//         const entity = this.fakeEntities.find(x => x.id === id);
//         const i = this.fakeEntities.indexOf(entity);
//         this.fakeEntities.splice(i, 1);
//         return Promise.resolve();
//     }
// }
