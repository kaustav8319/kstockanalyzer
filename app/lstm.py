    
from .models import Project

    # Splitting data for Test and Train
    X = np.array(df_ml.drop(['Prediction'],1))
    X = preprocessing.scale(X)
    X_forecast = X[-forecast_out:]
    X = X[:-forecast_out]
    y = np.array(df_ml['Prediction'])
    y = y[:-forecast_out]

    # Reshape the data for LSTM model
    X = X.reshape((X.shape[0], X.shape[1], 1))

    # Splitting data into train and test sets
    X_train, X_test, y_train, y_test = model_selection.train_test_split(X, y, test_size = 0.2, random_state=42)

    # Define LSTM model
    model = Sequential()
    model.add(LSTM(50, activation='relu', input_shape=(X_train.shape[1], 1)))
    model.add(Dense(1))
    model.compile(optimizer='adam', loss='mse')

    # Fit LSTM model
    model.fit(X_train, y_train, epochs=50, batch_size=32, verbose=2)

    # Predicting for 'n' days stock data
    forecast_prediction = model.predict(X_forecast)

    # Reshape the forecasted data to a flat list
    forecast = forecast_prediction.ravel().tolist()

    # Prediction Score
    confidence = model.evaluate(X_test, y_test, verbose=2)