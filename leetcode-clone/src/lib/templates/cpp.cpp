#include <iostream>
#include <fstream>
#include <vector>
#include <string>
#include <nlohmann/json.hpp>

using json = nlohmann::json;

// Your solution function here
vector<int> solution(vector<int>& nums) {
    // Your code here
}

int main() {
    // Read input from input.json
    ifstream input_file("input.json");
    json input_data;
    input_file >> input_data;
    
    vector<int> nums = input_data["input"];
    auto result = solution(nums);
    
    // Output result as JSON
    json output = result;
    cout << output.dump();
    
    return 0;
}