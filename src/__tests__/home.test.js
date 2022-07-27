import HomeMock from '../API/INITIAL_DATA';
import HomeReducer from '../redux/home/home';

describe('Test suit for home reducer', () => {
    it('Home reducer should return empty list in the begining and loading true', () => {
        // Arrange
        const expectedData = {
            loading: true,
            coinData: [],
        };

        // ACT
        const reducedData = HomeReducer(undefined, {type: undefined, payload: undefined});

        // Assert
        expect(reducedData).toEqual(expectedData);
        expect(reducedData.loading).toBeTruthy();
    });

    it("Test reducer if returns the mock API data", () => {
        // Arrange
        const expectedData = HomeMock;
        const FETCH_ACTION = 'crypto/Home/FETCH_DATA';

        // ACT
        const reducedData = HomeReducer(undefined, {type: FETCH_ACTION, loading: false, payload: expectedData});

        // Assert
        expect(reducedData.coinData).toEqual(expectedData);
        expect(reducedData.loading).toBeFalsy();
    });
});