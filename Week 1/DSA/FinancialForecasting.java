public class FinancialForecasting {

    // Recursive Method
    public static double predictFutureValue(
            double currentValue,
            double growthRate,
            int years) {

        // Base Condition
        if (years == 0) {
            return currentValue;
        }

        // Recursive Call
        return predictFutureValue(
                currentValue * (1 + growthRate),
                growthRate,
                years - 1
        );
    }

    public static void main(String[] args) {

        double currentValue = 10000;
        double growthRate = 0.10; // 10%
        int years = 5;

        double futureValue =
                predictFutureValue(
                        currentValue,
                        growthRate,
                        years
                );

        System.out.println("===== FINANCIAL FORECASTING =====");

        System.out.println("Current Value: " + currentValue);

        System.out.println("Growth Rate: " + (growthRate * 100) + "%");

        System.out.println("Years: " + years);

        System.out.println("Predicted Future Value: " + futureValue);

        // Analysis
        System.out.println();
        System.out.println("===== TIME COMPLEXITY ANALYSIS =====");

        System.out.println("Time Complexity: O(n)");

        System.out.println(
                "The recursive function executes once for each year."
        );

        System.out.println();

        System.out.println("Optimization:");

        System.out.println(
                "Use Iteration or Memoization to reduce recursive overhead."
        );

        System.out.println(
                "Iterative solutions avoid excessive recursive stack calls."
        );
    }
}
