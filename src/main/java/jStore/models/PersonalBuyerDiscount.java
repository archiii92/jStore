package jStore.models;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.OneToOne;

@Entity
public class PersonalBuyerDiscount extends Discount {
    @OneToOne(fetch = FetchType.EAGER)
    private Buyer buyer;

    public Buyer getBuyer() {
        return buyer;
    }

    public void setBuyer(Buyer buyer) {
        this.buyer = buyer;
    }
}