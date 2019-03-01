package com.javasampleapproach.controller;

import java.util.ArrayList;
import java.util.Collection;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import javax.annotation.PostConstruct;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.javasampleapproach.model.Address;
import com.javasampleapproach.model.Customer;

@RestController
@RequestMapping("/api/customer")
public class RestAPIs {
Map<Long, Customer> custStores = new HashMap<Long, Customer>();
	
	@PostConstruct
    public void initIt() throws Exception {
        custStores.put(Long.valueOf(1), new Customer(new Long(1), "Jack", 25, new Address("NANTERRE-CT", "77471")));
        custStores.put(Long.valueOf(2), new Customer(new Long(2), "Mary", 37, new Address("W-NORMA-ST", "77009")));
        custStores.put(Long.valueOf(3), new Customer(new Long(3), "Peter", 18, new Address("S-NUGENT-AVE", "77571")));
        custStores.put(Long.valueOf(4), new Customer(new Long(4), "Amos", 23, new Address("E-NAVAHO-TRL", "77449")));
        custStores.put(Long.valueOf(5), new Customer(new Long(5), "Craig", 45, new Address("AVE-N", "77587")));
        custStores.put(Long.valueOf(6), new Customer(new Long(6), "Sasindu", 29, new Address("Boralesgamuwa", "77587")));
    }
	 
	@GetMapping(value = "/all")
	public List<Customer> getResource() {
		ArrayList<Customer> custList = new ArrayList<Customer>(custStores.values());
		return custList;
	}
 
	@PutMapping(value = "/update/{id}")
	public Customer postCustomer(@PathVariable long id, @RequestBody Customer customer) {
		custStores.put(id, customer);
		return customer;
	}
}
