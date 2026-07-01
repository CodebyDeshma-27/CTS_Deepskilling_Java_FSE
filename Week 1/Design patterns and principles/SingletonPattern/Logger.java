package SingletonPattern;
public class Logger {

    // Private static instance
    private static Logger instance;

    // Private constructor
    private Logger() {
        System.out.println("Logger Instance Created");
    }

    // Public method to get instance
    public static Logger getInstance() {

        if (instance == null) {
            instance = new Logger();
        }

        return instance;
    }

    // Logging method
    public void logMessage(String message) {
        System.out.println("Log: " + message);
    }
}