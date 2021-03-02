// MOCKS //

// Option 1:
// Can create fake database for testing purposes
// if process.ENV.test, then route flows to test db
// can add beforeEach between describe blocks to seed/drop db before/after each test

// Option 2:
// Use mocks or NPM in-memory postgres instance

/**
 * @jest-environment node
 */

const request = require('supertest');
const app = require('../server/index.js');

describe('CRUD Failure Cases', () => {
  let invalidData = {invalid: false};
  let invalidId = 9999999999999;

  it ('FAILURES: testing GET error handling', async (done) => {
    let failedGet = await request(app).get(`/shopping/items/${invalidId}`);
    expect(404);
    done();
  })

  it ('FAILURES: testing GET DISTINCT error handling', async (done) => {
    let failedDistinctGet = await request(app).get(`/shopping/distinctItems/${invalidId}`)
    expect(failedDistinctGet.statusCode).toEqual(400)
    done();
  })

  /** Incomplete: Not receiving error with this method yet **/
  // it ('FAILURES: testing POST error handling', async (done) => {
  //   let failedPut = await request(app)
  //     .post(`/shopping/items/`)
  //     .send(invalidData)
  //   console.log(failedPut);
  //   expect(failedPut.statusCode).toEqual(400)
  //   done();
  // })

  it ('FAILURES: testing PUT error handling', async (done) => {
    let failedPut = await request(app)
      .put(`/shopping/items/${invalidId}`)
      .send(invalidData)
    expect(failedPut.statusCode).toEqual(400)
    done();
  })

  it ('FAILURES: testing DELETE error handling', async (done) => {
    let failedDelete = await request(app)
      .delete(`/shopping/items/${invalidId}`)
    expect(failedDelete.statusCode).toEqual(400)
    done();
  })

})


describe('CRUD Success Cases', () => {
  let newItem = {
    item_name: 'Test: New Item',
    best_seller: false,
    price: 10,
    price_reduction: 0,
    in_stock: true,
    us_free_shipping: false,
    carts_item_is_in: 2
  };
  let updatedItem = {
    item_name: 'Test: Updated Item',
    best_seller: true,
    price: 20,
    price_reduction: 1,
    in_stock: false,
    us_free_shipping: true,
    carts_item_is_in: 3
  };
  let itemId = 2;
  let newItemId;

  it('GET ONE: should retrieve an individual item\'s data', async (done) => {
    let itemInfo = await request(app).get(`/shopping/items/${itemId}`);
    expect(200);
    expect(itemInfo.body.item_id).toEqual(itemId);
    expect(typeof itemInfo.body.best_seller).toBe('boolean');
    done();
  });

  it('GET DISTINCT: should retrieve distinct fields only', async (done) => {
    let distinctInfo = await request(app).get(`/shopping/distinctItems/${itemId}`);
    expect(200);
    expect(typeof distinctInfo.body[0].item_name).toEqual('string');
    expect(typeof JSON.parse(distinctInfo.body[0].price)).toEqual('number');
    expect(typeof distinctInfo.body[0].in_stock).toEqual('undefined');
    done();
  })

  /** Incomplete: Receiving timeouts on this test currently **/
  // it('GET ALL: should retrieve all values', async (done) => {
  //   let req = await request(app).get('/shopping/items');
  //   // expect(200);
  //   // expect(req.body[0].item_id).toBe('')
  //   console.log('GET ALL:', req.body[0])
  //   done();
  // });

  it('POST: should create a new item', async (done) => {
    const res = await request(app)
      .post('/shopping/items')
      .send(newItem)
    newItemId = res.body.rows[0].item_id;
    console.log('POST new item id:', newItemId);
    expect(res.statusCode).toEqual(200)
    expect(res.body).toHaveProperty('rows')
    expect(typeof res.body.rows[0].item_id).toEqual('number')
    done();
  });

  it('PUT: should update an existing item', async (done) => {
    try {
      let req = await request(app)
        .put(`/shopping/items/${newItemId}`)
        .send(updatedItem)
      expect(req.statusCode).toEqual(200)

      // confirm changes with a new GET request
      console.log('PUT / get new item id:', newItemId);

      let res = await request(app)
        .get(`/shopping/items/${newItemId}`)
      expect(res.body.item_id).toEqual(newItemId);
      expect(res.body.item_name).toEqual(updatedItem.item_name);
    } catch (err) {
      console.log(`PUT testing error: ${err}`);
      throw err;
    } finally {
      done();
    }

  });

  it('DELETE: should delete an existing item', async (done) => {
    let req = await request(app).delete(`/shopping/items/${newItemId}`);
    expect(req.statusCode).toEqual(200)

    let res = await request(app).get(`/shopping/items/${newItemId}`);
    expect(res.body.price).toEqual(undefined);
    expect(res.body.item_name).toEqual(undefined);
    done();
  });

})
