import { MongoClient } from 'mongodb';

// Connection URL
const uri = 'mongodb://localhost:27017';

// Create a new MongoClient
const client = new MongoClient(uri);

// Connect to MongoDB
client.connect((err) => {
  if (err) {
    console.error('Error connecting to MongoDB:', err);
  } else {
    console.log('Connected to MongoDB');
    // You can perform database operations here
  }
});

// Assuming you are connected to MongoDB and have a reference to the collection
const collection = client.db('SampleDB').collection('Request');

// Insert a document
const document = { name: 'John Doe', email: 'johndoe@example.com' };
collection.insertOne(document, (err, result) => {
  if (err) {
    console.error('Error inserting document:', err);
  } else {
    console.log('Document inserted successfully:', result.insertedId);
  }
});

