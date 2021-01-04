import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer XMCuzKZVDU_bdGvZlww7UfVairsQ0WPx-4wR6kRfCEwKWGXQSBvsfMvM7yGvau_NKty7qnGs6Q35omyqCiNJHSwvJ10mXP2ogAxT-IOeCLm8Lxf8nNle1qgzOsHyX3Yx",
  },
});
