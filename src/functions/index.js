function weatherIconSort(iconIndex, icons) {
    let weatherIcon;
    switch(iconIndex) {
        case 1:
            weatherIcon = icons.sunnyIcon;
            break;
        case 2:
            weatherIcon = icons.sunnyIcon;
            break;
        case 3:
            weatherIcon = icons.sunnyIcon;
            break;
        case 4:
            weatherIcon = icons.partlyCloudyIcon;
            break;
        case 5:
            weatherIcon = icons.partlyCloudyIcon;
            break;
        case 6:
            weatherIcon = icons.partlyCloudyIcon;
            break;
        case 7:
            weatherIcon = icons.cloudyIcon;
            break;
        case 8:
            weatherIcon = icons.cloudyIcon;
            break;
        case 11:
            weatherIcon = icons.cloudyIcon;
            break;
        case 18:
            weatherIcon = icons.rainIcon;
            break;
        case 12:
            weatherIcon = icons.rainIcon;
            break;
        case 13:
            weatherIcon = icons.rainIcon;
            break;
        case 14:
            weatherIcon = icons.rainIcon;
            break;
        case 24:
            weatherIcon = icons.rainIcon;
            break;
        case 25:
            weatherIcon = icons.rainIcon;
            break;
        case 26:
            weatherIcon = icons.rainIcon;
            break;
        case 29:
            weatherIcon = icons.rainIcon;
            break;
        case 15:
            weatherIcon = icons.thunderstormIcon;
            break;
        case 16:
            weatherIcon = icons.thunderstormIcon;
            break;
        case 17:
            weatherIcon = icons.thunderstormIcon;
            break;
        case 19:
            weatherIcon = icons.snowIcon;
            break;
        case 20:
            weatherIcon = icons.snowIcon;
            break;
        case 21:
            weatherIcon = icons.snowIcon;
            break;
        case 22:
            weatherIcon = icons.snowIcon;
            break;
        case 23:
            weatherIcon = icons.snowIcon;
            break;
        case 33:
            weatherIcon = icons.moonIcon;
            break;
        case 34:
            weatherIcon = icons.moonIcon;
            break;
        case 35:
            weatherIcon = icons.partlyCloudyNightIcon;
            break;
        case 36:
            weatherIcon = icons.partlyCloudyNightIcon;
            break;
        case 37:
            weatherIcon = icons.partlyCloudyNightIcon;
            break;
        case 38:
            weatherIcon = icons.partlyCloudyNightIcon;
            break;
        case 39:
            weatherIcon = icons.rainIcon;
            break;
        case 40:
            weatherIcon = icons.rainIcon;
            break;
        case 41:
            weatherIcon = icons.thunderstormIcon;
            break;
        case 42:
            weatherIcon = icons.thunderstormIcon;
            break;
        case 43:
            weatherIcon = icons.snowIcon;
            break;
        case 44:
            weatherIcon = icons.snowIcon;
            break;
        default:
            weatherIcon = icons.partlyCloudyIcon;
    }

    return weatherIcon;
};

export default weatherIconSort;