package jStore.repositories;

import jStore.models.Discount;
import org.hibernate.Hibernate;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;
import java.util.UUID;

public class DiscountRepository {
    @PersistenceContext
    private EntityManager entityManager;

    @Transactional
    public List<Discount> getAll() {
        List<Discount> discounts = entityManager.createQuery("SELECT d from Discount d", Discount.class).getResultList();
        discounts.forEach(discount -> {
            Hibernate.initialize(discount.getProduct());
        });
        return discounts;
    }

    @Transactional
    public Discount getById(UUID id) {
        return entityManager.find(Discount.class, id);
    }

    @Transactional
    public UUID add(Discount discount) {
        entityManager.persist(discount);
        entityManager.flush();
        return discount.getId();
    }

    @Transactional
    public void update(Discount seller) {
        entityManager.merge(seller);
    }

    @Transactional
    public void delete(UUID id) {
        entityManager.remove(entityManager.find(Discount.class, id));
    }
}
