using System;
using System.Collections.Generic;

namespace wishList
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("My wishes...");
            List<Quote> allQuotes = getAllQuotes();

            DisplayQuotes(allQuotes);

        }

        static void DisplayQuotes(List<Quote> Quotes)
        {
            foreach (Quote aQuote in Quotes)
            {
                Console.WriteLine(aQuote.Text);
            }
        }

        static List<Quote> getAllQuotes()
        {
            List<Quote> allQuotes = new List<Quote>()
            {
                new Quote()
                {
                Text = "An original eight track of William Shatner's 'Lucy in the Sky with Diamonds'"
                },
                new Quote()
                {
                Text = "The ability to think of interesting wishes on short notice"
                },
                new Quote()
                {
                Text = "A washtub of Skittles"
                },
                new Quote()
                {
                Text = "World peace, but not the kind of world peace where all the humans are removed from existence"
                },
                new Quote()
                {
                Text = "A TV that is NOT internet-capable"
                },
                new Quote()
                {
                Text = "The ability to fly, but, like, really fast...not just, like, how fast I can walk, but, like, fast, you know?"
                }
            };

            return allQuotes;
        }

    }

    public class Quote
    {
        public string Text { get; set; }
    }
}