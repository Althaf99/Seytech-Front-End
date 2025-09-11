public partial class Form2 : Form
{
    public Form2()
    {
        InitializeComponent();
    }

    private void label1_Click(object sender, EventArgs e)
    {

    }

    private void button6_Click(object sender, EventArgs e)
    {

    }

    private void textBox6_TextChanged(object sender, EventArgs e)
    {
            private void btnCompare_Click(object sender, EventArgs e)
    {
        // try
        // {
        //     // Get current weight and selected category
        //     if (string.IsNullOrEmpty(txtWeightComparison.Text) || cmbMembership.SelectedIndex == -1)
        //     {
        //         MessageBox.Show("Please enter weight and select a weight category.", "Input Error");
        //         return;
        //     }

        //     if (!decimal.TryParse(txtWeightComparison.Text, out decimal currentWeight))
        //     {
        //         MessageBox.Show("Please enter a valid weight in kilograms.", "Input Error");
        //         return;
        //     }

        //     string selectedCategory = cmbMembership.SelectedItem.ToString();
        //     string comparisonResult = CompareWeight(currentWeight, selectedCategory);

        //     // Display result in the weight comparison textbox
        //     txtWeightComparison.Text = comparisonResult;
        // }
        // catch (Exception ex)
        // {
        //     MessageBox.Show($"An error occurred: {ex.Message}", "Error");
        // }
    }

    private string CompareWeight(decimal currentWeight, string category)
    {
        //         // Define weight categories and their limits
        //         Dictionary<string, decimal> weightLimits = new Dictionary<string, decimal>
        // {
        //     {"Flyweight", 66},
        //     {"Lightweight", 73},
        //     {"Light-Middleweight", 81},
        //     {"Middleweight", 90},
        //     {"Light-Heavyweight", 100},
        //     {"Heavyweight", decimal.MaxValue} // For unlimited category
        // };

        //         if (!weightLimits.ContainsKey(category))
        //         {
        //             return "Invalid weight category selected";
        //         }

        //         decimal categoryLimit = weightLimits[category];

        //         if (category == "Heavyweight" && currentWeight > 100)
        //         {
        //             return $"Current weight: {currentWeight:F1} kg\nValid for Heavyweight (Over 100 kg)";
        //         }

        //         if (currentWeight > categoryLimit)
        //         {
        //             decimal weightDifference = currentWeight - categoryLimit;
        //             return $"Current weight: {currentWeight:F1} kg\nWeight category limit: {categoryLimit} kg\nMust lose {weightDifference:F1} kg to make weight";
        //         }
        //         else if (currentWeight < categoryLimit)
        //         {
        //             decimal weightDifference = categoryLimit - currentWeight;
        //             return $"Current weight: {currentWeight:F1} kg\nWeight category limit: {categoryLimit} kg\nUnder weight by {weightDifference:F1} kg";
        //         }
        //         else
        //         {
        //             return $"Current weight: {currentWeight:F1} kg\nExactly at weight category limit: {categoryLimit} kg";
        //         }
    }
}
    
}