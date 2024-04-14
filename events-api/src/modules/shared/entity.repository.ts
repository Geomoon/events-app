export interface EntityRepository<T, ID> {
  getAll(): Promise<T[]>;
  getById(id: ID): Promise<T>;
  save(entity: T): Promise<ID>;
  update(id: ID, entity: Partial<T>): Promise<ID>;
  delete(id: ID): void;
}
