package jStore.repositories;

import org.springframework.data.repository.CrudRepository;

import jStore.models.Product;

public interface ProductRepository  extends CrudRepository<Product, Long> {

}
