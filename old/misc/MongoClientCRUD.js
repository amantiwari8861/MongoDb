const { MongoClient, ObjectId } = require('mongodb');

// Connection URI
const uri = 'mongodb://localhost:27017';

// Database Name
const dbName = 'mydatabase';

// Collection Name
const collectionName = 'products';

// Function to connect to MongoDB
async function connectToMongoDB() {
    try {
        const client = await MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('Connected to MongoDB');

        const db = client.db(dbName);
        const collection = db.collection(collectionName);

        return { client, collection };
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        throw error;
    }
}

// CRUD Operations

// Create
async function createProduct(productData) {
    try {
        const { client, collection } = await connectToMongoDB();
        const result = await collection.insertOne(productData);
        console.log('Product created:', result.ops[0]);
        client.close();
        return result.ops[0];
    } catch (error) {
        console.error('Error creating product:', error);
        throw error;
    }
}

// Read
async function getAllProducts() {
    try {
        const { client, collection } = await connectToMongoDB();
        const products = await collection.find({}).toArray();
        console.log('All products:', products);
        client.close();
        return products;
    } catch (error) {
        console.error('Error getting all products:', error);
        throw error;
    }
}

// Update
async function updateProduct(productId, updatedData) {
    try {
        const { client, collection } = await connectToMongoDB();
        const result = await collection.updateOne({ _id: ObjectId(productId) }, { $set: updatedData });
        console.log('Product updated:', result);
        client.close();
        return result;
    } catch (error) {
        console.error('Error updating product:', error);
        throw error;
    }
}

// Delete
async function deleteProduct(productId) {
    try {
        const { client, collection } = await connectToMongoDB();
        const result = await collection.deleteOne({ _id: ObjectId(productId) });
        console.log('Product deleted:', result);
        client.close();
        return result;
    } catch (error) {
        console.error('Error deleting product:', error);
        throw error;
    }
}

// Example usage
async function main() {
    const newProduct = {
        id: '2',
        image: 'https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/q/p/q/-original-imagy5wfcgybpq5x.jpeg?q=70&crop=false',
        name: 'Redmi 45',
        price: 4700
    };

    await createProduct(newProduct);
    const allProducts = await getAllProducts();
    console.log('All products:', allProducts);

    // Update product
    await updateProduct('5f635f00a8f4775d26b7d77d', { price: 5000 });

    // Delete product
    await deleteProduct('5f635f00a8f4775d26b7d77d');
}

main();
