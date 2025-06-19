package singleton;

public class Logger {
    // Step 2.1: Create a private static instance of the Logger class
    private static Logger instance;

    // Step 2.2: Private constructor prevents instantiation from other classes
    private Logger() {
        System.out.println("Logger Initialized.");
    }

    // Step 2.3: Public static method to provide access to the instance
    public static Logger getInstance() {
        // Lazy initialization: create instance only when needed
        if (instance == null) {
            instance = new Logger();
        }
        return instance;
    }

    // A sample log method to demonstrate usage
    public void log(String message) {
        System.out.println("Log: " + message);
    }
}

