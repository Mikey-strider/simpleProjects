type Rating = 1 | 2 | 3 | 4 | 5;

type EatingOutRecord = {
  timestamp: number;
  restaurantName: string;
  order: string[];
  rating: Rating;
}


function getRestaurantsBetween(records: Array<EatingOutRecord>, startTime: number, endTime: number): string[] {
  if (!(startTime < endTime)) {
    throw new Error('Start time must be less than end time!')
  }

  return records
    .filter(
      ({ timestamp }) => timestamp > startTime && timestamp < endTime
    )
    .map(
      ({ restaurantName }) => restaurantName
    );
}

function getOrderAverageRating(records: Array<EatingOutRecord>, orderItem: string): number {
  const filteredRatings = records
    .filter(
      ({ order }) => order.includes(orderItem)
    )
    .map((record) => record.rating);

  const ratingTotal = filteredRatings.reduce(
    (total, rating) => rating + total,
    0
  );

  return ratingTotal / filteredRatings.length;
}