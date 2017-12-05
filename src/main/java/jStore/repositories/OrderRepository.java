package jStore.repositories;

import jStore.models.Order;
import org.hibernate.Hibernate;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;
import java.util.UUID;

public class OrderRepository {
    @PersistenceContext
    private EntityManager entityManager;

    @Transactional
    public List<Order> getAll() {
        List<Order> orders =  entityManager.createQuery("SELECT o from Order o", Order.class).getResultList();
        orders.forEach(order -> {
            //order.getOrderDetails().size();
            Hibernate.initialize(order.getOrderDetails());
            Hibernate.initialize(order.getSeller());
            Hibernate.initialize(order.getBuyer());
        });
        return orders;
    }

//    @Transactional
//    public Product getById(UUID id) {
//        return entityManager.find(Product.class, id);
//    }
//
    @Transactional
    public UUID add(Order order){
        order.getOrderDetails().forEach(orderDetail -> {
            entityManager.persist(orderDetail);
        });

        entityManager.persist(order);
        entityManager.flush();
        return order.getId();
    }
//
//    @Transactional
//    public void update(Product product){
//        entityManager.merge(product);
//    }
//
    @Transactional
    public void delete(UUID id){
        entityManager.remove(entityManager.find(Order.class, id));
    }
}
