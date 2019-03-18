export const toBeTypeOf = (received, argument) => {
	const typeOfReceived = typeof(received);
	const isType = typeOfReceived === 'object' ? Array.isArray(received) 
		? "array" : typeOfReceived : typeOfReceived;
		return isType === argument ? {
			message: () => `expected ${received}`,
			pass: true
		} : {
			message: () => `expected to be type of '${argument}'\n but received ${received} type of ${typeof(received)}`,
			pass: false
		}
}