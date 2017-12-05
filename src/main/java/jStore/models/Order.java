package jStore.models;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Entity
public class Order extends AbstractBaseEntity {

    @Temporal(TemporalType.TIMESTAMP)
    private Date orderDate;

    @ManyToOne(fetch = FetchType.LAZY)
    private Buyer buyer;

    @ManyToOne(fetch = FetchType.LAZY)
    private Seller seller;

    @OneToMany(fetch = FetchType.LAZY)
    private List<OrderDetail> orderDetails;

    public Date getOrderDate() {
        return orderDate;
    }

    public void setOrderDate(Date orderDate) {
        this.orderDate = orderDate;
    }

    public Buyer getBuyer() {
        return buyer;
    }

    public void setBuyer(Buyer buyer) {
        this.buyer = buyer;
    }

    public Seller getSeller() {
        return seller;
    }

    public void setSeller(Seller seller) {
        this.seller = seller;
    }

    public List<OrderDetail> getOrderDetails() {
        return orderDetails;
    }

    public void setOrderDetail(List<OrderDetail> orderDetails) {
        this.orderDetails = orderDetails;
    }
}
