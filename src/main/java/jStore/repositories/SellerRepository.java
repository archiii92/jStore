package jStore.repositories;

import jStore.models.Seller;
import org.springframework.data.repository.CrudRepository;

import java.util.UUID;

public interface SellerRepository extends CrudRepository<Seller, UUID> {

}
