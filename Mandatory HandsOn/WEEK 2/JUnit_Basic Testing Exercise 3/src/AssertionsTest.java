import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

public class AssertionsTest {
    @Test
    public void testAssertions() {
        assertEquals(5, 2 + 3);            // assert equals
        assertTrue(5 > 3);                 // assert true
        assertFalse(5 < 3);                // assert false
        assertNull(null);                 // assert null
        assertNotNull(new Object());      // assert not null
    }
}
