import { Model } from 'mongoose';
import { IGenericRepository } from 'src/core/abstracts';

export class MongoGenericRepository<T> implements IGenericRepository<T>{
    private _repository: Model<T>;
    private _populateOnFind: string[];
  
    constructor(repository: Model<T>, populateOnFind: string[] = []) {
      this._repository = repository;
      this._populateOnFind = populateOnFind;
    }
    delete(id: string) {
        return this._repository.findByIdAndDelete(id).exec()
    }
  
    getAll(): Promise<T[]> {
        return this._repository.find().populate(this._populateOnFind).exec();
    }
    get(id: string): Promise<T> {
        return this._repository.findById(id).exec();
    }
    create(item: T): Promise<T> {
        return this._repository.create(item);
    }
    update(id: string, item: T) {
        return this._repository.findByIdAndUpdate(id, item);
    }
    
}
