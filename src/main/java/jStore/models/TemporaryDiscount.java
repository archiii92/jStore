package jStore.models;

import javax.persistence.Entity;
import java.util.Date;

@Entity
public class TemporaryDiscount extends Discount {
    private Date validFrom;

    private Date validTo;

    public Date getValidFrom() {
        return validFrom;
    }

    public void setValidFrom(Date validFrom) {
        this.validFrom = validFrom;
    }

    public Date getValidTo() {
        return validTo;
    }

    public void setValidTo(Date validTo) {
        this.validTo = validTo;
    }
}
