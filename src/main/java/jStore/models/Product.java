package jStore.models;

import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(schema = "public", name = "products")
public class Product extends AbstractBaseEntity {

    private String name;

    private int unitPrice;

    private int unitsInStock;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getUnitPrice() {
        return unitPrice;
    }

    public void setUnitPrice(int unitPrice) {
        this.unitPrice = unitPrice;
    }

    public int getUnitsInStock() {
        return unitsInStock;
    }

    public void setUnitsInStock(int unitsInStock) {
        this.unitsInStock = unitsInStock;
    }
}