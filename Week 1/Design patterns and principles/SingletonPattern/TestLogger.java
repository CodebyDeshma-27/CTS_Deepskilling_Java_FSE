package SingletonPattern;
public class TestLogger {

    public static void main(String[] args) {

        Logger logger1 = Logger.getInstance();
        logger1.logMessage("First Message");
        Logger logger2 = Logger.getInstance();
        logger2.logMessage("Second Message");

        if (logger1 == logger2) {
            System.out.println("Only one instance exists");
        } else {
            System.out.println("Multiple instances exist");
        }
    }
}