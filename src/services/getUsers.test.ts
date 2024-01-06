import getUsers from "./getUsers";

describe("Fetch Users", () => {
    const mockResponse = [
        {
            id: 1,
            name: 'John Doe',
            username: 'john_doe_123',
            email: 'john.doe@example.com',
            address: {
                street: '123 Main Street',
                suite: 'Apt 456',
                city: 'Cityville',
                zipcode: '12345',
                geo: {
                lat: '40.7128',
                lng: '-74.0060',
                },
            },
            phone: '123-456-7890',
            website: 'www.johndoe.com',
            company: {
              name: 'ABC Inc.',
              catchPhrase: 'Catch me if you can',
              bs: 'Strategizing the business world',
            },
          }
    ];

    beforeEach(() => {
        const mockHeaders = new Headers();
        mockHeaders.append('Content-Type', 'application/json');

        jest.spyOn(global as any, 'fetch').mockResolvedValue({
            json: jest.fn().mockResolvedValue(mockResponse),
            headers: mockHeaders,
            ok: true,
            redirected: false,
            status: 200,
            statusText: 'OK',
            type: 'basic',
            url: 'https://jsonplaceholder.typicode.com/users',
        });
    });


    afterEach(() => {
        jest.restoreAllMocks();
    });

    it('should fetch users successfully', async () => {
        const result = await getUsers();

        // Expectations
        expect(result).toEqual(mockResponse);
        expect(global.fetch).toHaveBeenCalledTimes(1);
        expect(global.fetch).toHaveBeenCalledWith("https://jsonplaceholder.typicode.com/users");
    });
});