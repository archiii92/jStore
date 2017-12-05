package jStore.controllers;

import jStore.models.Order;
import jStore.repositories.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@Controller
@RequestMapping(path = "/api/orders")
public class OrderController {
    @Autowired
    private OrderRepository orderRepository;

    @RequestMapping(method = RequestMethod.GET)
    public @ResponseBody
    Iterable<Order> getAllOrders() {
        return orderRepository.getAll();
    }

    @RequestMapping(method = RequestMethod.POST)
    public ResponseEntity<?> addProduct(@RequestBody Order order) {
        try {
            UUID uuid = orderRepository.add(order);
            return new ResponseEntity<>(uuid.toString(), HttpStatus.OK);
        } catch (Exception ex) {
            String errorMessage;
            errorMessage = ex + " <== error";
            return new ResponseEntity<>(errorMessage, HttpStatus.BAD_REQUEST);
        }
    }

    @RequestMapping(method = RequestMethod.DELETE, value = "/{orderId}")
    public ResponseEntity<?> deleteBuyer(@PathVariable UUID orderId) {
        try {
            orderRepository.delete(orderId);
            return new ResponseEntity<>(true, HttpStatus.OK);
        } catch (Exception ex) {
            String errorMessage;
            errorMessage = ex + " <== error";
            return new ResponseEntity<>(errorMessage, HttpStatus.BAD_REQUEST);
        }
    }
}
