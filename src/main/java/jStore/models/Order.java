package jStore.models;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(schema = "public")
public class Order extends AbstractBaseEntity {

    @Temporal(TemporalType.TIMESTAMP)
    private Date orderDate;

//    @ManyToOne(fetch = FetchType.EAGER)
//    @PrimaryKeyJoinColumn
//    @Column(name = "buyer_id")
//    private Buyer buyer;

//    @OneToOne(fetch = FetchType.EAGER,targetEntity = Seller.class)
//    @PrimaryKeyJoinColumn
//    private Seller seller;

    public Date getOrderDate() {
        return orderDate;
    }

    public void setOrderDate(Date orderDate) {
        this.orderDate = orderDate;
    }

//    public Buyer getBuyer() {
//        return buyer;
//    }
//
//    public void setBuyer(Buyer buyer) {
//        this.buyer = buyer;
//    }

//    public Seller getSeller() {
//        return seller;
//    }
//
//    public void setSeller(Seller seller) {
//        this.seller = seller;
//    }
}
