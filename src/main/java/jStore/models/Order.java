package jStore.models;

import javax.persistence.*;
import java.util.Date;

@Entity
public class Order extends AbstractBaseEntity {

    @Temporal(TemporalType.TIMESTAMP)
    private Date orderDate;

    @ManyToOne(fetch = FetchType.EAGER)
    private Buyer buyer;

    @ManyToOne(fetch = FetchType.EAGER)
    private Seller seller;

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
}
