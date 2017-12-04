package jStore.repositories;

import jStore.models.Seller;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;
import java.util.UUID;

public class SellerRepository {
    @PersistenceContext
    private EntityManager entityManager;

    @Transactional
    public List<Seller> getAll() {
        return entityManager.createQuery("SELECT s from Seller s", Seller.class).getResultList();
    }

    @Transactional
    public Seller getById(UUID id) {
        return entityManager.find(Seller.class, id);
    }

    @Transactional
    public UUID add(Seller seller){
        entityManager.persist(seller);
        entityManager.flush();
        return seller.getId();
    }

    @Transactional
    public void update(Seller seller){
        entityManager.merge(seller);
    }

    @Transactional
    public void delete(UUID id){
        entityManager.remove(entityManager.find(Seller.class, id));
    }
}
