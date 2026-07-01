package com.deshma;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.*;

public class AAAExampleTest {

    private Calculator calculator;

    // Setup Method
    @Before
    public void setUp() {
        calculator = new Calculator();
        System.out.println("Setup completed");
    }

    // AAA Pattern Test
    @Test
    public void testAdd() {

        // Arrange
        int num1 = 10;
        int num2 = 20;

        // Act
        int result = calculator.add(num1, num2);

        // Assert
        assertEquals(30, result);
    }

    // Teardown Method
    @After
    public void tearDown() {
        System.out.println("Teardown completed");
    }
}