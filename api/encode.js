const { DimonError, encodeDimon } = require('../dist');

export default async function handler(request, response) {
    try {
        const inputValue = [request.query.inputValue].flat()[0];
        const locale = [request.query.locale].flat()[0];

        if (typeof inputValue === 'undefined' || inputValue === '') {
            throw new DimonError('inputValue parameter is required', {
                inputValue,
            });
        }

        const outputValue = encodeDimon(
            parseInt(inputValue, 10),
            locale || undefined
        );

        return response
            .status(200)
            .json({ success: true, data: { outputValue } });
    } catch (error) {
        if (error instanceof DimonError) {
            return response.status(400).json({
                success: false,
                error: {
                    message: error.message,
                    extra: error.extra,
                },
            });
        }

        return response.status(500).json({
            success: false,
            error: {
                message: 'Internal server error',
            },
        });
    }
}
