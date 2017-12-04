package jStore.repositories;

import jStore.models.Buyer;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;
import java.util.UUID;

public class BuyerRepository {
    @PersistenceContext
    private EntityManager entityManager;

    @Transactional
    public List<Buyer> getAll() {
        return entityManager.createQuery("SELECT b from Buyer b", Buyer.class).getResultList();
    }

    @Transactional
    public Buyer getById(UUID id) {
        return entityManager.find(Buyer.class, id);
    }

    @Transactional
    public UUID add(Buyer buyer){
        entityManager.persist(buyer);
        entityManager.flush();
        return buyer.getId();
    }

    @Transactional
    public void update(Buyer buyer){
        entityManager.merge(buyer);
    }

    @Transactional
    public void delete(UUID id){
        entityManager.remove(entityManager.find(Buyer.class, id));
    }
}