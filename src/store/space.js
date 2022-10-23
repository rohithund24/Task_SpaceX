//initial State
const initialState = {
	spaces: [],
	currentYear: null,
	sLaunch: null,
	sLanding: null
}


//Types 
export const GET_SPACE = "GET_SPACE"
export const SET_SPACES = "SET_SPACES"
export const SET_CURRENTYEAR = "SET_CURRENTYEAR"
export const SET_LAUNCH = "SET_LAUNCH"
export const SET_LANDING = "SET_LANDING"

//ACTIONS 
export const setSpaces = (filters) => ({
	type: SET_SPACES,
	filters,
})

export const setCurrentYear = (filters) => ({
	type: SET_CURRENTYEAR,
	filters,
})

export const seLaunch = (filters) => ({
	type: SET_LAUNCH,
	filters,
})

export const setLanding = (filters) => ({
	type: SET_LANDING,
	filters,
})


// Reducers
export const spacesReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_SPACES:
			return {
				...state, spaces: action.payload
			}

		case SET_CURRENTYEAR:
			return {
				...state, currentYear: action.payload
			}

		case SET_LAUNCH:
			return {
				...state, sLaunch: action.payload
			}

		case SET_LANDING:
			return {
				...state, sLanding: action.payload
			}

		default:
			return state
	}
}