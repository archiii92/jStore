package jStore.controllers;

import jStore.models.Order;
import jStore.repositories.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping(path = "/order")
public class OrderController {
    @Autowired
    private OrderRepository orderRepository;

    @GetMapping(path = "/all")
    public @ResponseBody
    Iterable<Order> getAllOrders() {
        return orderRepository.findAll();
    }
}
