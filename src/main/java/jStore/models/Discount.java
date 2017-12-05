package jStore.models;

import javax.persistence.MappedSuperclass;

@MappedSuperclass
class Discount extends AbstractBaseEntity {
    private short discount;

    public short getDiscount() {
        return discount;
    }

    public void setDiscount(short discount) {
        this.discount = discount;
    }
}
