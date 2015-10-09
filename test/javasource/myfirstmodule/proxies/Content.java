// This file was generated by Mendix Business Modeler.
//
// WARNING: Code you write here will be lost the next time you deploy the project.

package myfirstmodule.proxies;

import com.mendix.core.Core;
import com.mendix.core.CoreException;
import com.mendix.systemwideinterfaces.core.IContext;
import com.mendix.systemwideinterfaces.core.IMendixIdentifier;
import com.mendix.systemwideinterfaces.core.IMendixObject;

/**
 * 
 */
public class Content extends system.proxies.Image
{
	/**
	 * Internal name of this entity
	 */
	public static final String entityName = "MyFirstModule.Content";

	/**
	 * Enum describing members of this entity
	 */
	public enum MemberNames
	{
		Headline("Headline"),
		Description("Description"),
		sq("sq"),
		PublicThumbnailPath("PublicThumbnailPath"),
		FileID("FileID"),
		Name("Name"),
		DeleteAfterDownload("DeleteAfterDownload"),
		Contents("Contents"),
		HasContents("HasContents");

		private String metaName;

		MemberNames(String s)
		{
			metaName = s;
		}

		@Override
		public String toString()
		{
			return metaName;
		}
	}

	public Content(IContext context)
	{
		this(context, Core.instantiate(context, "MyFirstModule.Content"));
	}

	protected Content(IContext context, IMendixObject contentMendixObject)
	{
		super(context, contentMendixObject);
		if (!Core.isSubClassOf("MyFirstModule.Content", contentMendixObject.getType()))
			throw new IllegalArgumentException("The given object is not a MyFirstModule.Content");
	}

	/**
	 * @deprecated Use 'new Content(Context)' instead. Note that the constructor will not insert the new object in the database.
	 */
	@Deprecated
	public static myfirstmodule.proxies.Content create(IContext context) throws CoreException
	{
		IMendixObject mendixObject = Core.create(context, "MyFirstModule.Content");
		return new myfirstmodule.proxies.Content(context, mendixObject);
	}

	/**
	 * @deprecated Use 'Content.load(IContext, IMendixIdentifier)' instead.
	 */
	@Deprecated
	public static myfirstmodule.proxies.Content initialize(IContext context, IMendixIdentifier mendixIdentifier) throws CoreException
	{
		return myfirstmodule.proxies.Content.load(context, mendixIdentifier);
	}

	/**
	 * Initialize a proxy using context (recommended). This context will be used for security checking when the get- and set-methods without context parameters are called.
	 * The get- and set-methods with context parameter should be used when for instance sudo access is necessary (IContext.getSudoContext() can be used to obtain sudo access).
	 */
	public static myfirstmodule.proxies.Content initialize(IContext context, IMendixObject mendixObject)
	{
		return new myfirstmodule.proxies.Content(context, mendixObject);
	}

	public static myfirstmodule.proxies.Content load(IContext context, IMendixIdentifier mendixIdentifier) throws CoreException
	{
		IMendixObject mendixObject = Core.retrieveId(context, mendixIdentifier);
		return myfirstmodule.proxies.Content.initialize(context, mendixObject);
	}

	public static java.util.List<myfirstmodule.proxies.Content> load(IContext context, String xpathConstraint) throws CoreException
	{
		java.util.List<myfirstmodule.proxies.Content> result = new java.util.ArrayList<myfirstmodule.proxies.Content>();
		for (IMendixObject obj : Core.retrieveXPathQuery(context, "//MyFirstModule.Content" + xpathConstraint))
			result.add(myfirstmodule.proxies.Content.initialize(context, obj));
		return result;
	}

	/**
	 * @return value of Headline
	 */
	public final String getHeadline()
	{
		return getHeadline(getContext());
	}

	/**
	 * @param context
	 * @return value of Headline
	 */
	public final String getHeadline(IContext context)
	{
		return (String) getMendixObject().getValue(context, MemberNames.Headline.toString());
	}

	/**
	 * Set value of Headline
	 * @param headline
	 */
	public final void setHeadline(String headline)
	{
		setHeadline(getContext(), headline);
	}

	/**
	 * Set value of Headline
	 * @param context
	 * @param headline
	 */
	public final void setHeadline(IContext context, String headline)
	{
		getMendixObject().setValue(context, MemberNames.Headline.toString(), headline);
	}

	/**
	 * @return value of Description
	 */
	public final String getDescription()
	{
		return getDescription(getContext());
	}

	/**
	 * @param context
	 * @return value of Description
	 */
	public final String getDescription(IContext context)
	{
		return (String) getMendixObject().getValue(context, MemberNames.Description.toString());
	}

	/**
	 * Set value of Description
	 * @param description
	 */
	public final void setDescription(String description)
	{
		setDescription(getContext(), description);
	}

	/**
	 * Set value of Description
	 * @param context
	 * @param description
	 */
	public final void setDescription(IContext context, String description)
	{
		getMendixObject().setValue(context, MemberNames.Description.toString(), description);
	}

	/**
	 * @return value of sq
	 */
	public final Integer getsq()
	{
		return getsq(getContext());
	}

	/**
	 * @param context
	 * @return value of sq
	 */
	public final Integer getsq(IContext context)
	{
		return (Integer) getMendixObject().getValue(context, MemberNames.sq.toString());
	}

	/**
	 * Set value of sq
	 * @param sq
	 */
	public final void setsq(Integer sq)
	{
		setsq(getContext(), sq);
	}

	/**
	 * Set value of sq
	 * @param context
	 * @param sq
	 */
	public final void setsq(IContext context, Integer sq)
	{
		getMendixObject().setValue(context, MemberNames.sq.toString(), sq);
	}

	@Override
	public boolean equals(Object obj)
	{
		if (obj == this)
			return true;

		if (obj != null && getClass().equals(obj.getClass()))
		{
			final myfirstmodule.proxies.Content that = (myfirstmodule.proxies.Content) obj;
			return getMendixObject().equals(that.getMendixObject());
		}
		return false;
	}

	@Override
	public int hashCode()
	{
		return getMendixObject().hashCode();
	}

	/**
	 * @return String name of this class
	 */
	public static String getType()
	{
		return "MyFirstModule.Content";
	}

	/**
	 * @return String GUID from this object, format: ID_0000000000
	 * @deprecated Use getMendixObject().getId().toLong() to get a unique identifier for this object.
	 */
	@Override
	@Deprecated
	public String getGUID()
	{
		return "ID_" + getMendixObject().getId().toLong();
	}
}
