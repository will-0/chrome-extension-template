import generalReducer from "./general";

describe("General State Reducers", () => {
    describe("setActive", () => {
        it("should set isActive to true", () => {
            const initialState = {
                isActive: false,
                isFetching: false
            }
            const expectedState = {
                isActive: true,
                isFetching: false
            }
            expect(generalReducer(initialState, { type: "general/setActive" })).toEqual(expectedState)
        })
    })
})