package jStore.repositories;

import jStore.models.Buyer;
import org.springframework.data.repository.CrudRepository;

import java.util.UUID;

public interface BuyerRepository extends CrudRepository<Buyer, UUID> {

}