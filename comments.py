def server_method():
    list_of_tweets = [
        "I love the new features in the latest update!",
        "I hate the new features in the latest update!",
    ]
    return (dict(
        list_of_tweets=list_of_tweets,
        tweet_count=len(list_of_tweets),
    ))
