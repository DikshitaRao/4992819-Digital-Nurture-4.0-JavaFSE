package com.search;

public class SearchDemo {
    public static void main(String[] args) {
        Product[] products = {
                new Product(101, "Laptop", "Electronics"),
                new Product(102, "Shoes", "Footwear"),
                new Product(103, "Keyboard", "Electronics"),
                new Product(104, "Watch", "Accessories")
        };

        // Linear Search
        Product result1 = LinearSearch.linearSearch(products, "Shoes");
        System.out.println("Linear Search Result: " + result1);

        // Binary Search
        BinarySearch.sortProductsByName(products);
        Product result2 = BinarySearch.binarySearch(products, "Keyboard");
        System.out.println("Binary Search Result: " + result2);
    }
}

