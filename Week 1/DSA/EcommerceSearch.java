import java.util.Arrays;
import java.util.Comparator;

class Product {
    int productId;
    String productName;
    String category;

    // Constructor
    Product(int productId, String productName, String category) {
        this.productId = productId;
        this.productName = productName;
        this.category = category;
    }

    // Display Product Details
    public void displayProduct() {
        System.out.println("Product ID: " + productId);
        System.out.println("Product Name: " + productName);
        System.out.println("Category: " + category);
        System.out.println("----------------------------");
    }
}

public class EcommerceSearch {

    // Linear Search
    public static Product linearSearch(Product[] products, String targetName) {

        for (Product product : products) {

            if (product.productName.equalsIgnoreCase(targetName)) {
                return product;
            }
        }

        return null;
    }

    // Binary Search
    public static Product binarySearch(Product[] products, String targetName) {

        int left = 0;
        int right = products.length - 1;

        while (left <= right) {

            int mid = (left + right) / 2;

            int comparison =
                    products[mid].productName.compareToIgnoreCase(targetName);

            if (comparison == 0) {
                return products[mid];
            }

            else if (comparison < 0) {
                left = mid + 1;
            }

            else {
                right = mid - 1;
            }
        }

        return null;
    }

    public static void main(String[] args) {

        // Product Array
        Product[] products = {

                new Product(101, "Laptop", "Electronics"),
                new Product(102, "Mobile", "Electronics"),
                new Product(103, "Shoes", "Fashion"),
                new Product(104, "Watch", "Accessories"),
                new Product(105, "Tablet", "Electronics")
        };

        // LINEAR SEARCH
        System.out.println("===== LINEAR SEARCH =====");

        Product linearResult =
                linearSearch(products, "Laptop");

        if (linearResult != null) {

            System.out.println("Product Found:");
            linearResult.displayProduct();

        } else {

            System.out.println("Product Not Found");
        }

        // SORT ARRAY FOR BINARY SEARCH
        Arrays.sort(products,
                Comparator.comparing(p -> p.productName));

        // BINARY SEARCH
        System.out.println("===== BINARY SEARCH =====");

        Product binaryResult =
                binarySearch(products, "Laptop");

        if (binaryResult != null) {

            System.out.println("Product Found:");
            binaryResult.displayProduct();

        } else {

            System.out.println("Product Not Found");
        }

        // ANALYSIS
        System.out.println("===== TIME COMPLEXITY ANALYSIS =====");

        System.out.println("Linear Search:");
        System.out.println("Best Case  : O(1)");
        System.out.println("Average Case: O(n)");
        System.out.println("Worst Case : O(n)");

        System.out.println();

        System.out.println("Binary Search:");
        System.out.println("Best Case  : O(1)");
        System.out.println("Average Case: O(log n)");
        System.out.println("Worst Case : O(log n)");

        System.out.println();

        System.out.println(
                "Binary Search is more efficient for large datasets " +
                "because it reduces the search space by half in each iteration."
        );
    }
}

