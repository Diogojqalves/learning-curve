from threading import Thread

def square_numbers():
    for i in range(100):
        i * i

if __name__ == "__main__":
    threads = []
    num_threads = 10

    # creat threads
    for i in range(num_threads):
        thread = Thread(target=square_numbers)
        threads.append(thread)

    # start

    for thread in threads:
        thread.start()

    #join
    for thread in threads:
        thread.join()

    print('end main')