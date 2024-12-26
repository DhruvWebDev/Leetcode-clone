import java.io.File;
import java.nio.file.Files;
import java.util.*;
import com.fasterxml.jackson.databind.ObjectMapper;

public class Solution {
    // Your solution method here
    public int[] solution(int[] nums) {
        // Your code here
        return new int[]{};
    }
    
    public static void main(String[] args) throws Exception {
        ObjectMapper mapper = new ObjectMapper();
        
        // Read input from input.json
        File inputFile = new File("input.json");
        Map<String, int[]> input = mapper.readValue(inputFile, Map.class);
        
        Solution solution = new Solution();
        int[] result = solution.solution(input.get("input"));
        
        // Output result as JSON
        System.out.println(mapper.writeValueAsString(result));
    }
}