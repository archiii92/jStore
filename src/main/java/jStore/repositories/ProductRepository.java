package jStore.repositories;

import jStore.models.Product;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;
import java.util.UUID;

public class ProductRepository {
    @PersistenceContext
    private EntityManager entityManager;

    @Transactional
    public List<Product> getAll() {
        return entityManager.createQuery("SELECT p from Product p", Product.class).getResultList();
    }

    @Transactional
    public Product getById(UUID id) {
        return entityManager.find(Product.class, id);
    }

    @Transactional
    public UUID add(Product product){
        entityManager.persist(product);
        entityManager.flush();
        return product.getId();
    }

    @Transactional
    public void update(Product product){
        entityManager.merge(product);
    }

    @Transactional
    public void delete(UUID id){
        entityManager.remove(entityManager.find(Product.class, id));
    }
}